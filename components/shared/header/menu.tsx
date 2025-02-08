import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import Link from "next/link";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Menu = () => {
    return(
        <div className="flex justyfy-end gap-3">
            <nav className="hidden md:flex w-full max-w-xs gap-1">
            <ModeToggle/>
                    <Button asChild variant='ghost'>
                        <Link href='/cart'>
                        <ShoppingCart/> Card
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link href='/sign-in'>
                        <UserIcon/> Sign in
                        </Link>
                    </Button>
            </nav>
            <nav>
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger className='align-middle'>
                        <EllipsisVertical/>
                        </SheetTrigger>
                        <SheetContent className='flex flex-col items-start'>
                            <SheetTitle>Menu</SheetTitle>
                            <ModeToggle/>
                            <Button asChild variant='ghost'>
                            <Link href='/cart'>
                            <ShoppingCart/>Cart
                            </Link>
                            </Button>
                            <Button asChild>
                        <Link href='/sign-in'>
                        <UserIcon/> Sign in
                        </Link>
                    </Button>
                            <SheetDescription></SheetDescription>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </div>
    );
}

export default Menu;