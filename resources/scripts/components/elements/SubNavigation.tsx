import styled from 'styled-components/macro';
import tw, { theme } from 'twin.macro';

const SubNavigation = styled.div`
    ${tw`w-full overflow-x-auto`};
    background: hsl(150, 18%, 9%);
    border-bottom: 1px solid rgba(16, 185, 129, 0.1);

    & > div {
        ${tw`flex items-center text-sm mx-auto px-2`};
        max-width: 1200px;

        & > a,
        & > div {
            ${tw`inline-block py-3 px-4 text-neutral-400 no-underline whitespace-nowrap transition-all duration-150`};

            &:not(:first-of-type) {
                ${tw`ml-2`};
            }

            &:hover {
                ${tw`text-neutral-100`};
            }

            &:active,
            &.active {
                ${tw`text-emerald-400`};
                box-shadow: inset 0 -2px ${theme`colors.emerald.500`.toString()};
            }
        }
    }
`;

export default SubNavigation;
