import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function GameDetailLoading() {
  return (
    <div className="container max-w-7xl py-6 md:py-10">
      {/* Breadcrumbs Skeleton */}
      <div className="flex items-center gap-2 mb-8">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-24" />
      </div>

      {/* Header Skeleton */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div className="space-y-3 w-full md:w-auto">
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-64 rounded-lg" />
            <Skeleton className="h-6 w-24 rounded-full" />
          </div>
          <div className="flex items-center gap-4 pt-1">
            <Skeleton className="h-6 w-20 rounded-md" />
            <div className="h-4 w-px bg-border hidden md:block" />
            <Skeleton className="h-6 w-32 rounded-md" />
          </div>
        </div>
        <Skeleton className="h-10 w-24 rounded-full" />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Editor Skeleton - 8 Columns */}
        <div className="lg:col-span-8 space-y-4">
          <Card className="border-border bg-card overflow-hidden">
            <div className="h-[500px] flex flex-col">
              <div className="border-b border-border p-4 flex items-center gap-2">
                <Skeleton className="h-3 w-3 rounded-full" />
                <Skeleton className="h-3 w-3 rounded-full" />
                <Skeleton className="h-3 w-3 rounded-full" />
                <Skeleton className="h-4 w-40 ml-4 rounded-md" />
              </div>
              <div className="p-6 space-y-4 flex-1">
                <Skeleton className="h-4 w-[90%]" />
                <Skeleton className="h-4 w-[85%]" />
                <Skeleton className="h-4 w-[40%]" />
                <Skeleton className="h-4 w-[95%] mt-8" />
                <Skeleton className="h-4 w-[70%]" />
                <Skeleton className="h-4 w-[80%]" />
              </div>
              <div className="p-4 border-t border-border flex justify-between">
                <Skeleton className="h-10 w-32 rounded-md" />
                <div className="flex gap-2">
                  <Skeleton className="h-10 w-24 rounded-md" />
                  <Skeleton className="h-10 w-24 rounded-md" />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar Skeleton - 4 Columns */}
        <div className="lg:col-span-4 space-y-6">
          {[1, 2].map((i) => (
            <Card
              key={i}
              className="border-border bg-card shadow-sm overflow-hidden"
            >
              <CardHeader className="bg-muted/30 border-b border-border/50 py-4 px-5">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-8 w-8 rounded-md" />
                  <Skeleton className="h-5 w-32 rounded-md" />
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
                {i === 2 && (
                  <div className="flex gap-2 mt-4">
                    <Skeleton className="h-6 w-16 rounded-full" />
                    <Skeleton className="h-6 w-16 rounded-full" />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
