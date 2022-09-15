import '../styles/ProjectCard.css';

export default function ProjectCard (props) {
    return (
        <div className="card">
            <div className="card__body">
                <img className="card__img" src={props.src} alt="projectimg"/>
                <h1 className="card__title">{props.title}</h1>
                <p className="card__description">{props.description}</p>
            </div>
            <button className="card__btn">See more</button>
            <button className="card__btn-github">git</button> {/*chequear BEM */}
        </div>
    );
}