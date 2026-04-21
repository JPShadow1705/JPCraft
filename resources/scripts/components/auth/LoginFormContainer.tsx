import React, { forwardRef } from 'react';
import { Form } from 'formik';
import styled from 'styled-components/macro';
import FlashMessageRender from '@/components/FlashMessageRender';
import tw from 'twin.macro';

type Props = React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> & {
    title?: string;
};

const Container = styled.div`
    ${tw`w-full mx-auto px-4`};
    max-width: 460px;
`;

const JPCraftLoginLogo = () => (
    <svg width="56" height="56" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4L42 14V34L24 44L6 34V14L24 4Z" fill="#059669" />
        <path d="M24 4L42 14L24 24L6 14L24 4Z" fill="#34d399" />
        <path d="M6 14L24 24V44L6 34V14Z" fill="#064e3b" />
        <path d="M42 14L24 24V44L42 34V14Z" fill="#059669" />
    </svg>
);

export default forwardRef<HTMLFormElement, Props>(({ title, ...props }, ref) => (
    <Container>
        <FlashMessageRender css={tw`mb-4 px-1`} />
        <div
            style={{
                background: 'linear-gradient(160deg, hsl(150,18%,11%) 0%, hsl(150,20%,7%) 100%)',
                border: '1px solid rgba(16,185,129,0.18)',
                borderRadius: '16px',
                padding: '2.5rem 2rem',
                boxShadow: '0 24px 48px rgba(0,0,0,0.7), 0 0 0 1px rgba(16,185,129,0.06)',
            }}
        >
            {/* Logo + brand */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem', gap: '0.75rem' }}>
                <JPCraftLoginLogo />
                <div style={{ textAlign: 'center' }}>
                    <h1
                        style={{
                            fontFamily: 'Inter, system-ui, sans-serif',
                            fontWeight: 700,
                            fontSize: '1.65rem',
                            color: '#f9fafb',
                            margin: 0,
                            letterSpacing: '-0.025em',
                        }}
                    >
                        JP<span style={{ color: '#10b981' }}>Craft</span>
                    </h1>
                    {title && (
                        <p
                            style={{
                                fontFamily: 'Inter, system-ui, sans-serif',
                                fontSize: '0.82rem',
                                color: 'hsl(150, 8%, 50%)',
                                margin: '0.3rem 0 0 0',
                                letterSpacing: '0.01em',
                            }}
                        >
                            {title}
                        </p>
                    )}
                </div>
            </div>

            {/* Form */}
            <Form {...props} ref={ref}>
                <div>{props.children}</div>
            </Form>
        </div>

        <p css={tw`text-center text-neutral-600 text-xs mt-5`}>
            &copy; {new Date().getFullYear()}&nbsp;
            <span css={tw`text-neutral-500`}>JPCraft</span>
            &nbsp;&mdash; All rights reserved.
        </p>
    </Container>
));
