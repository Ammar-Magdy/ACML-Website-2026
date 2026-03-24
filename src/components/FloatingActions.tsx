import { useState, useRef, useEffect } from "react";
import { Music, VolumeX, Mail } from "lucide-react";
import musicFile from "../assets/Music/Wassermusik · Water-1.mp3";

export default function FloatingActions() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Constants
  const LEADER_KEY = "acml_music_leader";
  const CHANNEL_NAME = "acml_music_channel";

  // Unique ID for this tab instance
  const tabId = useRef(Math.random().toString(36).substring(2, 9));
  // Track leadership status via ref for immediate access in event handlers
  const isLeaderRef = useRef(false);

  useEffect(() => {
    const channel = new BroadcastChannel(CHANNEL_NAME);

    // --- Helper Functions ---

    const attemptToClaimLeadership = () => {
      // 1. First check: Is it already taken?
      if (localStorage.getItem(LEADER_KEY)) {
        return; // Already has a leader
      }

      // 2. Race condition handling: Wait a micro-delay and check again
      // This prevents multiple tabs opening at exact same millisecond from both claiming
      const randomDelay = Math.floor(Math.random() * 50) + 10;

      setTimeout(() => {
        // Double check after delay
        if (localStorage.getItem(LEADER_KEY)) {
          return; // Someone else claimed it during our delay
        }

        // 3. Claim it!
        localStorage.setItem(LEADER_KEY, tabId.current);
        isLeaderRef.current = true;

        // Start playing
        if (audioRef.current) {
          audioRef.current
            .play()
            .then(() => {
              setIsPlaying(true);
            })
            .catch((err) => {
              console.log("Autoplay blocked:", err);
              // If we can't play, we still hold leadership to prevent others from playing
              // or we could yield. For "strict single player", holding is safer.
            });
        }
      }, randomDelay);
    };

    const handleLeaderExiting = () => {
      // Leader is gone! Try to take over.
      // Random delay to scatter takeover attempts
      console.log("Leader exiting detected. Attempting takeover...");
      const delay = Math.floor(Math.random() * 150) + 50;
      setTimeout(attemptToClaimLeadership, delay);
    };

    const checkState = () => {
      const currentLeader = localStorage.getItem(LEADER_KEY);
      if (currentLeader === tabId.current) {
        // I am the leader, ensure I'm playing
        isLeaderRef.current = true;
        if (!isPlaying && audioRef.current && audioRef.current.paused) {
          setIsPlaying(true);
          audioRef.current.play().catch((e) => console.log(e));
        }
      } else if (!currentLeader) {
        // No leader, try to claim
        attemptToClaimLeadership();
      } else {
        // Someone else is leader
        isLeaderRef.current = false;
        if (isPlaying) {
          setIsPlaying(false);
          if (audioRef.current) audioRef.current.pause();
        }
      }
    };

    // --- Event Listeners ---

    channel.onmessage = (event) => {
      if (event.data === "LEADER_EXITING") {
        handleLeaderExiting();
      }
    };

    // Also listen to storage events (e.g. if leader crashed and lock was cleared manually or by browser)
    const handleStorage = (e: StorageEvent) => {
      if (e.key === LEADER_KEY && !e.newValue) {
        // Leader key removed -> try to claim
        handleLeaderExiting();
      }
    };

    const handleBeforeUnload = () => {
      if (isLeaderRef.current) {
        // I am leader and I'm leaving
        localStorage.removeItem(LEADER_KEY);
        channel.postMessage("LEADER_EXITING");
      }
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener("beforeunload", handleBeforeUnload);

    // --- On Mount ---
    // Delay slightly to ensure DOM is ready and allow other tabs to settle if simultaneous reload
    setTimeout(checkState, 100);

    return () => {
      channel.close();
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      handleBeforeUnload(); // Ensure cleanup on component unmount too
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        // We pause, but we remain leader so no one else starts auto-playing
      } else {
        // If we want to play, we must ensure we are leader
        // Force takeover if user explicitly interacts
        localStorage.setItem(LEADER_KEY, tabId.current);
        isLeaderRef.current = true;
        audioRef.current.play();
        // Optionally notify others we took over, but they will just stay silent
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      {/* Background Music Player - Bottom Left */}
      <div className="fixed bottom-5 left-10 z-50">
        <audio ref={audioRef} src={musicFile} loop />
        <button
          onClick={togglePlay}
          className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-110 transition-all duration-300 text-emerald-600 dark:text-emerald-500 group"
          aria-label={isPlaying ? "Pause music" : "Play music"}
          title={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <div className="relative">
              <Music size={24} className="animate-pulse" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </div>
          ) : (
            <VolumeX size={24} className="text-gray-400 dark:text-gray-500" />
          )}
        </button>
      </div>

      {/* Email / Contact Button - Bottom Right */}
      <div className="fixed bottom-20 right-10 z-50">
        <a
          href="mailto:info@acml-egypt.com"
          className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-110 transition-all duration-300 text-emerald-600 dark:text-emerald-500 flex items-center justify-center group"
          aria-label="Contact Us"
          title="Contact Us"
        >
          <Mail size={24} />
        </a>
      </div>
    </>
  );
}
