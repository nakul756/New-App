import { Coins } from "lucide-react";

interface CreditBadgeProps {
  credits: number;
}

export function CreditBadge({ credits }: CreditBadgeProps) {
  return (
    <div className="flex items-center gap-2 rounded-md bg-primary/5 px-3 py-2">
      <Coins className="h-4 w-4 text-primary" />
      <span className="text-sm font-medium">{credits} credits</span>
    </div>
  );
}
