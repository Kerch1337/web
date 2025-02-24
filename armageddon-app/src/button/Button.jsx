export function Button() {
    const test = 'test'

    return (
        <button
            onClick={() => {
                click(test)
                hello()
            }}
        >
            Custom Button
        </button>
    )
}

function click(test) {
    console.log('click', test)
}

function hello() {
    console.log('hello')
}
