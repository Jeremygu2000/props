const Article = (props) => {
console.log(props);

    return (
        <div>
            <h2>{props.id}. {props.title} </h2>
            { props.children }
        </div>
    );
};

export default Article;