"use client";

import { useMemo, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { games } from "@/config/games";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord as theme } from "react-syntax-highlighter/dist/cjs/styles/prism";
import {
  CheckCircledIcon,
  Crosshair1Icon,
  Crosshair2Icon,
  CheckIcon,
  StopIcon,
  Cross2Icon,
  ArrowRightIcon,
} from "@radix-ui/react-icons";
import { Trophy, Rocket } from "lucide-react";
import { getDiscovered } from "@/utils/codeComponentUtils";
import { sortGamesByRef } from "@/utils/gamesUtils";
import { reviver } from "@/utils/codeComponentUtils";
import { useReward } from "react-rewards";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Game } from "@/types/game";
import { useProgressStore } from "@/stores/progress-store";

export function CodeComponent(props: { game: Game }) {
  const [foundError, setFoundError] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [penalty, setPenalty] = useState(0);
  const [tried, setTried] = useState<CodeLine[]>([]);
  const [discovered, setDiscovered] = useState<CodeLine[]>([]);
  const { completeGame, setCurrentContent, isContentCompleted } =
    useProgressStore();

  const [userSubHint, setUserSubHint] = useState(
    <>
      <Crosshair1Icon className="h-6 w-6" />
      <span className="pl-2 text-2xl">Find the error</span>
    </>,
  );
  // undefined nextHref will assign one if we find another game and if the players win.
  const [nextHref, setNextHref] = useState<string | undefined>();
  const { toast } = useToast();
  const { reward } = useReward("rewardId", "confetti", {
    elementCount: 150,
    angle: 35,
  });

  const codeBlock: CodeBlock = useMemo(() => {
    return JSON.parse(props.game.codeBlock, reviver);
  }, [props.game]);
  const defaultLines = codeBlock.codeLines.filter((cl) =>
    [StateEnum.NORMAL, StateEnum.ERROR].includes(cl.state),
  );
  const interact = (cl: CodeLine) => {
    // incrementing the counter and skipping if not first time guessed.
    if (tried.includes(cl)) return;
    setTried([...tried, cl]);

    if (cl.state == StateEnum.NORMAL) {
      setPenalty((p) => p + 2);
      toast({
        variant: "destructive",
        title: "That's not it. Give it another shot!",
        description: cl.hint ? cl.hint : "",
      });
    }
    if (cl.state == StateEnum.ERROR) {
      toast({
        title: "Good Job! That was it!",
        description: "Find the correct line in the given candidates",
      });
      setDiscovered([...discovered, ...getDiscovered(codeBlock, cl)]);
      setFoundError(true);
      setUserSubHint(
        <>
          <Crosshair2Icon className="h-6 w-6" />
          <span className="pl-2 text-2xl">
            Click on the line that fixes the problem
          </span>
        </>,
      );
    }
    if (cl.state == StateEnum.WRONG) {
      setPenalty((p) => p + 2);
      toast({
        variant: "destructive",
        title: "That's not the right answer. Keep trying!",
        description: cl.hint ? cl.hint : "",
      });
    }
    if (cl.state == StateEnum.CORRECT) {
      const finalLineScore = Math.max(0, cl.score - penalty);
      setScore(score + finalLineScore);
      completeGame(props.game.href, finalLineScore, penalty);
      setIsSuccessOpen(true);
      // Next game in time or last created.
      setTimeout(
        () =>
          setNextHref(
            // Try the next one first.
            games.filter((g) => g.ref == props.game.ref + 1)[0]?.href ||
              // Default to another of higher score if possible
              games
                .sort(sortGamesByRef)
                .filter((game) => game.ref < props.game.ref)[0]?.href ||
              // Go back to first one if nothing else.
              games[0].href,
          ),
        100,
      );
      setUserSubHint(
        <>
          <CheckCircledIcon className="h-6 w-6" />
          <span className="pl-2 text-2xl">Congrats!</span>
        </>,
      );
      setFoundError(false);
      reward();
    }
  };

  //find out why not interactive anymore.
  return (
    <div id="rewardId">
      <div className="flex items-center font-bold text-emerald-900 py-4 px-6 bg-emerald-100/80 backdrop-blur-sm border border-emerald-200 rounded-xl mb-6 shadow-sm transition-all duration-300">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-500 rounded-lg text-white">
            {foundError ? (
              <Crosshair2Icon className="h-5 w-5" />
            ) : (
              <Crosshair1Icon className="h-5 w-5" />
            )}
          </div>
          <span className="text-lg md:text-xl font-semibold tracking-tight">
            {foundError
              ? "Nice! Now select the fix."
              : "Find the bug in the code above."}
          </span>
        </div>
      </div>
      <div className="flex flex-col bg-[#1e1e1e] text-[#d4d4d4] rounded-lg shadow-2xl overflow-hidden border border-white/10">
        {/* Mac-style Window Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-white/5">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="text-xs text-gray-400 font-medium flex items-center">
            <span className="mr-2 text-blue-400 font-bold">py</span>
            main.py — learnpython.today
          </div>
          <div className="w-12"></div> {/* Spacer for symmetry */}
        </div>

        {/* Tab Bar */}
        <div className="flex bg-[#252526] px-2 h-9 items-end">
          <div className="bg-[#1e1e1e] text-gray-300 text-xs px-4 py-2 rounded-t-lg border-t border-x border-white/5 flex items-center gap-2">
            <span className="text-blue-400 font-bold">py</span>
            <span className="text-gray-200">main.py</span>
            <div className="w-2 h-2 rounded-full bg-gray-500/20 group-hover:bg-gray-500/40"></div>
          </div>
        </div>

        <div className="p-4 bg-[#1e1e1e]">
          {codeBlock.codeLines
            .filter((cl) => [...defaultLines, ...discovered].includes(cl))
            .map((cl: CodeLine, index: number) => {
              const isCandidate = [StateEnum.WRONG, StateEnum.CORRECT].includes(
                cl.state,
              );
              // Creating the border to have the first one rounded on top
              // and last one on the bottom (both if it is the only one).
              let border = index == 0 ? "5px 5px " : "0 0 ";
              border +=
                index == [...defaultLines, ...discovered].length - 1
                  ? "5px 5px "
                  : "0 0 ";

              const CustomPre = (props: any) => {
                const cn =
                  "absolute top-1/2 -translate-y-1/2 right-4 text-white p-1 rounded-full bg-white/10";
                let icon = <span></span>;
                if (
                  tried.includes(cl) &&
                  (cl.state == StateEnum.ERROR || cl.state == StateEnum.CORRECT)
                ) {
                  icon = <CheckIcon className={cn} />;
                }
                if (
                  tried.includes(cl) &&
                  (cl.state == StateEnum.WRONG || cl.state == StateEnum.NORMAL)
                ) {
                  icon = <Cross2Icon className={cn} />;
                }

                return (
                  <div
                    className={`relative group flex items-center transition-all duration-200
                    ${
                      isCandidate &&
                      "bg-emerald-500/10 border-l-4 border-emerald-500 cursor-cell hover:bg-emerald-500/20"
                    }
                    ${
                      cl.state == StateEnum.NORMAL &&
                      foundError &&
                      "opacity-40 grayscale blur-[0.5px] cursor-not-allowed"
                    }
                    ${
                      !foundError &&
                      !isCandidate &&
                      "hover:bg-white/5 cursor-pointer"
                    }
                  `}
                  >
                    <div className="w-12 text-right pr-4 text-gray-500 font-mono text-xs select-none">
                      {index + 1}
                    </div>
                    <pre
                      {...props}
                      className="flex-1 py-2 !bg-transparent text-sm md:text-base"
                    />{" "}
                    {icon}{" "}
                  </div>
                );
              };
              return (
                <SyntaxHighlighter
                  key={index}
                  style={theme}
                  PreTag={CustomPre}
                  customStyle={{
                    margin: "0",
                    padding: "0",
                    background: "transparent",
                  }}
                  language={codeBlock.language}
                  showLineNumbers={false}
                  codeTagProps={{
                    className: "codeLine py-0",
                  }}
                  wrapLongLines={true}
                  wrapLines={true}
                  lineProps={() => {
                    return {
                      style: {
                        display: "block",
                        width: "100%",
                      },
                      onClick() {
                        interact(cl);
                      },
                    };
                  }}
                >
                  {cl.content}
                </SyntaxHighlighter>
              );
            })}
        </div>
      </div>
      <a
        href={`/games/${nextHref}`}
        className={score > 0 && nextHref ? "flex" : "hidden"}
      >
        <Button
          className="text-black mt-8 font-bold
                bg-gradient-to-r from-green-400 to-green-700"
        >
          Go To The Next Game <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Button>
      </a>
      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        score={score}
        nextHref={nextHref}
      />
    </div>
  );
}

function SuccessModal({
  isOpen,
  onClose,
  score,
  nextHref,
}: {
  isOpen: boolean;
  onClose: () => void;
  score: number;
  nextHref?: string;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-[#1e1e1e] border-white/10 text-white">
        <DialogHeader>
          <div className="mx-auto my-4 p-4 bg-emerald-500/20 rounded-full w-fit">
            <Trophy className="h-12 w-12 text-emerald-500 animate-bounce" />
          </div>
          <DialogTitle className="text-3xl font-black text-center bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
            Level Complete!
          </DialogTitle>
          <DialogDescription className="text-center text-gray-400 text-lg">
            You spotted the bug and fixed the code like a pro.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4 py-4">
          <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5">
            <span className="text-gray-400 font-medium">Points Earned</span>
            <span className="text-2xl font-black text-emerald-400">
              +{score} XP
            </span>
          </div>
        </div>

        <DialogFooter className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            onClick={onClose}
            className="w-full border-white/10 hover:bg-white/5 text-white"
          >
            Review Code
          </Button>
          <a href={`/games/${nextHref}`} className="w-full">
            <Button className="w-full bg-emerald-600 hover:bg-emerald-50 text-white hover:text-emerald-900 font-bold gap-2">
              Next Level <Rocket className="h-4 w-4" />
            </Button>
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
