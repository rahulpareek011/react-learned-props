function Message({UserName, textColor}) {
    return (
        <>
            <h1 style={{ color: textColor }}>Hello {UserName}</h1>
        </>
    )
}

export default Message