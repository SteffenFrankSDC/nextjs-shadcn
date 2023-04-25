import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './textarea';
import { Label } from './label';

const meta: Meta<typeof Textarea> = {
    component: Textarea,
};

export default meta;
type Story = StoryObj<typeof Textarea>;


export const Basic: Story = {
    render: (args) => <Textarea {...args} />,
    args: { className: "", scale: "md" },
    decorators: [
        Story =>
            <div>
                <Label htmlFor="field">
                    This is a textarea (with a label)
                </Label>
                <Story id="field" />
            </div >
    ]
};
