export default function Tabs({ childern, buttons, ButtonContainer = 'menu'}){
    return (
        <>
            <ButtonContainer>{ buttons }</ButtonContainer>
            { childern }
        </>
    )
};