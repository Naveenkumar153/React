export default function Section({  title, children, ...pros }) {
    return (
        <section { ...pros }>
                <h2>{ title }</h2>
                { children }
        </section>
    );
};