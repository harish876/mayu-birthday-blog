import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";

export function WishCard({ wish }) {
  return (
    <Card className="h-full">
      <CardHeader className="space-y-1">
        <div className="font-semibold">{wish.name}</div>
        <div className="text-sm text-muted-foreground">
          {formatDistanceToNow(wish.created_at, { addSuffix: true })}
        </div>
      </CardHeader>
      <CardContent className="text-muted-foreground">
        {wish.message}
      </CardContent>
    </Card>
  );
}
