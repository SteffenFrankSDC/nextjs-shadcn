import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";

const initials = (name: string | null | undefined) => {
    const [firstName, secondName, ...moreNames] = (name ?? "")
        .trim()
        .split(/[ -]/u);
    const initials =
        firstName == null || firstName === ""
            ? "?"
            : secondName == null
                ? firstName.slice(0, 2)
                : moreNames.length === 0
                    ? firstName.slice(0, 1) + secondName.slice(0, 1)
                    : firstName.slice(0, 1) + (moreNames?.at(-1)?.slice(0, 1) ?? "");
    return initials.toUpperCase();
};


export const AppHeader = () => {
    const { data: sessionData } = useSession();

    return (
        <div className="dark bg-background text-foreground flex flex-1 flex-row items-center justify-between px-5 py-2">
            <div className="text-xl font-bold">
                {sessionData?.user?.name ? `Notes for ${sessionData.user.name}` : ""}
            </div>

            {sessionData?.user ? (
                <Avatar
                    scale="md"
                    onClick={() => void signOut()}
                >
                    <AvatarImage
                        src={sessionData?.user?.image ?? ""}
                        alt={sessionData?.user?.name ?? ""} />
                    <AvatarFallback>
                        {initials(sessionData?.user?.name)}
                    </AvatarFallback>
                </Avatar>
            ) : (
                <Button
                    onClick={() => void signIn()}
                >
                    Sign In
                </Button>
            )}
        </div>

    );
};