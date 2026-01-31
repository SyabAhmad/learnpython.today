import { Skeleton } from "@/components/ui/skeleton";

export default function PathsListLoading() {
  return (
    <div className="space-y-12 animate-pulse">
      {/* Header Skeleton */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Skeleton className="h-12 w-12 rounded-lg" />
          <Skeleton className="h-10 w-96" />
        </div>
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-5/6" />
      </div>

      {/* Paths Grid Skeleton */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-max">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="rounded-xl border border-border/50 p-6 space-y-4"
          >
            <div className="flex justify-between items-start">
              <Skeleton className="h-10 w-10 rounded-lg" />
              <Skeleton className="h-6 w-24 rounded-full" />
            </div>
            <Skeleton className="h-7 w-full" />
            <div className="space-y-3 flex-1">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <div className="flex gap-3 pt-2">
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-6 w-20 rounded-full" />
              </div>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-border/50">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-5 w-5" />
            </div>
          </div>
        ))}
      </div>

      {/* Footer Info Skeleton */}
      <div className="rounded-lg border border-border/50 p-8">
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
}
