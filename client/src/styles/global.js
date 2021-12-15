import tw from "tailwind-styled-components";

export const LongButton = tw.button`
    py-4
    px-8
    rounded-md
`;

export const ShortButton = tw.button`
    py-3
    px-4
    rounded-md
`;
export const Input = tw.input`
    rounded-md 
    border-2 
    p-3 
    outline-none
`;
export const ShortInput = tw.input`
    rounded-md 
    border-2 
    p-2 
    outline-none
`;

export const FlexCenterCenter = tw.div`
    flex
    justify-center
    items-center
`;
export const FlexItemsCenter = tw.div`
    flex
    items-center
`;

export const Row = tw.div`
    flex
    flex-row
    flex-wrap
`;

export const Column = tw.div`
    flex
    flex-col
    flex-wrap
`;
