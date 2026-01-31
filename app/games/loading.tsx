import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function GamesLoading() {
  return (
    <div className="container py-10 space-y-12">
      {/* Header Skeleton */}
      <div className="text-center space-y-4">
        <Skeleton className="h-12 w-3/4 md:w-1/2 mx-auto rounded-lg" />
        <Skeleton className="h-6 w-full md:w-2/3 mx-auto rounded-md" />
      </div>

      {/* Category Sections */}
      {[1, 2].map((section) => (
        <div key={section} className="space-y-6">
          <div className="flex items-center gap-3 border-b border-border pb-4">
            <Skeleton className="w-10 h-10 rounded-lg" />
            <Skeleton className="h-8 w-40 rounded-md" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((card) => (
              <Card
                key={card}
                className="border-border bg-card overflow-hidden"
              >
                <CardHeader className="space-y-3">
                  <div className="flex justify-between items-start">
                    <Skeleton className="h-6 w-3/4 rounded-md" />
                    <Skeleton className="h-5 w-5 rounded-full" />
                  </div>
                  <Skeleton className="h-10 w-full rounded-md" />
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Skeleton className="h-5 w-16 rounded-full" />
                    <Skeleton className="h-5 w-16 rounded-full" />
                  </div>
                  <Skeleton className="h-4 w-24 rounded-md" />
                  <Skeleton className="h-10 w-full rounded-md mt-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
