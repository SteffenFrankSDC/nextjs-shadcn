import type { Meta, StoryObj } from '@storybook/react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from './card'
import { Label } from './label';
import { Input } from './input';
import { Button } from './button';

const meta: Meta<typeof Card> = {
    component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;


export const Basic: Story = {
    render: (args) => <Card {...args}>
        <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
            <form>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Name of your project" />
                    </div>
                </div>
            </form>
        </CardContent>
        <CardFooter className="flex justify-between">
            <Button variant="ghost" semantics="secondary">Cancel</Button>
            <Button>Deploy</Button>
        </CardFooter>
    </Card>,
    args: { className: "w-[350px]" }
};
