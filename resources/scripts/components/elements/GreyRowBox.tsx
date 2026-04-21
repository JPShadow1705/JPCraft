import styled from 'styled-components/macro';
import tw from 'twin.macro';

export default styled.div<{ $hoverable?: boolean }>`
    ${tw`flex rounded-lg no-underline text-neutral-200 items-center bg-neutral-800 p-4 border border-transparent transition-all duration-150 overflow-hidden`};

    ${(props) => props.$hoverable !== false && tw`hover:border-emerald-700 hover:bg-neutral-700`};

    & .icon {
        ${tw`rounded-full w-16 flex items-center justify-center bg-neutral-700 p-3`};
    }
`;
