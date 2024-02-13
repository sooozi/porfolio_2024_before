// app/head.tsx

export default function Head() {
    return (
        <>
            <title>My Page Title</title>
            <link
                as="style"
                href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css"
                rel="stylesheet"
                // @ts-ignore
                precedence="default"
                />
                <link
                as="style"
                href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendardstatic.css"
                rel="stylesheet"
                // @ts-ignore
                precedence="default"
            />
        </>
    );
}
