import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CardImage } from "./index";

export default {
  title: 'atoms/CardImage',
  component: CardImage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CardImage>

const Template: ComponentStory<typeof CardImage> = (args) => <CardImage {...args} />

export const sample = Template.bind({})
sample.args = {
  alt: 'vercel',
  src: '/_next/image?url=%2Fvercel.svg&amp;w=256&amp;q=75'
}
