import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section, SocialMedia, StackItem } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			padding="140px 0 2000px 0"
			sm-padding="40px 0"
			background="url(https://images.unsplash.com/photo-1481568653575-4f94cfc55eb3?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0%/contain,--primaryGradient"
			width="px"
			box-shadow="--xl"
			font="normal 16px --fontFamily-serifTimes"
			border-color="#fd8d89"
			border-width="25px"
			border-style="double"
			mix-blend-mode="normal"
		>
			<Override
				slot="SectionContent"
				cursor="crosshair"
				transform="matrix(1,0,0, 1,0,0)"
				color="#000000"
				font="100px Cambria, &quot;Hoefler Text&quot;, Utopia, &quot;Liberation Serif&quot;, &quot;Nimbus Roman No9 L Regular&quot;, Times, &quot;Times New Roman&quot;, serif"
			/>
			<Box
				max-width="240px"
				padding="50px 80px 80px 50px"
				background="--color-light"
				color="--dark"
				min-width="50px"
			>
				<Text
					as="h4"
					font="--base"
					color="--grey"
					letter-spacing="1px"
					text-transform="uppercase"
					margin="6px 0"
				>
					About me
				</Text>
				<Text as="h2" font="--headline2" margin="0 0 12px 0">
					Hey, I'm Mawiya
				</Text>
				<Text font="--base">
					Hey, my name is Mawiya Manzar.I am a teenager who has big dreams to achieve in life
		  I had worked as a Youtuber,video editor and a picture editor.
			I have a craving to become a better and disciplined man
			in life.I have made this website to develop my hobbie into business.
			I am not a workaholic man but I want to be so ,because it is so satisfying
			when you have exceeded your limits to do work. Yes, our brain is a good deciever
			in terms of fooling us that we can't do more than that.I am in need of searching
			of people who could give me their 1000% to achieve my dream.
				</Text>
			</Box>
		</Section>
		<Box />
		<Button>
			Button
		</Button>
		<Text>
			Some text
		</Text>
		<Text>
			Some text
		</Text>
		<Text>
			Some text
		</Text>
		<SocialMedia
			facebook="https://www.facebook.com/quarklyapp/"
			twitter="https://twitter.com/quarklyapp"
			youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
			vkontakte="https://vk.com/quarklyapp"
			telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
		/>
		<SocialMedia
			facebook="https://www.facebook.com/quarklyapp/"
			twitter="https://twitter.com/quarklyapp"
			youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
			vkontakte="https://vk.com/quarklyapp"
			telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
		/>
		<StackItem>
			<Text font="--lead">
				Stack item
			</Text>
		</StackItem>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});