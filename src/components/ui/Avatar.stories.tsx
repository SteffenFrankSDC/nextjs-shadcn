import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarImage, AvatarFallback } from './avatar';

const meta: Meta<typeof Avatar> = {
    component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar & typeof AvatarImage>;

export const Basic: Story = {
    render: ({ src, alt, ...args }) =>
        <Avatar {...args}>
            <AvatarImage src={src} alt={alt} />
            <AvatarFallback>FB</AvatarFallback>
        </Avatar>,
    args: { src: "https://i.pravatar.cc/150?img=60", alt: "an avatar image" }
};
