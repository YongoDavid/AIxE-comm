import { User, LogOut, Settings, CreditCard } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export default function AccountDropdown({user}) {
  return (
    <div>
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button
                    variant="ghost"
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Account menu"
                >
                    <User size={20} />
                    <span className="hidden lg:block">{user.name ? user.name : "Account"}</span>
                </Button>
               < DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{user.name || "User"}</p>
                        <p className="text-xs leading-none text-muted-foreground">{user.email || "user@example.com"}</p>
                    </DropdownMenuLabel>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <CreditCard className="mr-2 h-4 w-4" />
                        <span>Billing</span>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem className="text-destructive focus:text-destructive">
                        <LogOut className="mr-2 h-4 w-4" />
                    <span>Sign out</span>
                    </DropdownMenuItem>
               </DropdownMenuContent>
            </DropdownMenuTrigger>
            
        </DropdownMenu>
    </div>
  )
}