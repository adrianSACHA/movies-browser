import React from "react";
import { ButtonLink } from "../ButtonLink";
import { githubUsername } from "../githubUsername";
import { Header, Paragraph, Wrapper } from "./styled";
import { ReactComponent as WarningIcon } from "./Danger.svg";

export const ErrorBox = () => (
    <Wrapper>
        <WarningIcon />
        <Header>Ooops! Something went&nbsp;wrong...</Header>
        <Paragraph>
            Please check your network&nbsp;connection
            <br />
            and try again
        </Paragraph>
        <ButtonLink
            href={`https://${githubUsername}.github.io/movies-browser/`}
            target="_blank"
        >
            Back to home page
        </ButtonLink>
    </Wrapper>
);
