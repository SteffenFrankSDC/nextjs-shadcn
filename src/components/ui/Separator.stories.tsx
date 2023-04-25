import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './separator';

const meta: Meta<typeof Separator> = {
    component: Separator,
} as Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof Separator>;


export const Example: Story = {
    render: (args) =>
        <div>
            <div className="space-y-1">
                <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
                <p className="text-sm text-muted-foreground">
                    An open-source UI component library.
                </p>
            </div>
            <Separator  {...args} />
            <div className="flex h-4 items-center text-sm">
                <div>Blog</div>
                <Separator {...args} orientation="vertical" />
                <div>Docs</div>
                <Separator {...args} orientation="vertical" />
                <div>Source</div>
            </div>
        </div>,
    args: {
        scale: "md"
    },
};


