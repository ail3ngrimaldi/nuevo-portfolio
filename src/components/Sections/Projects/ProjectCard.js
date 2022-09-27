import './ProjectCard.scss';

export default function ProjectCard (props) {
    return (
        <div className="card">
            <div className="card__body">
                <img className="card__img" src={props.img} alt="projectimg"/>
                <h1 className="card__title">{props.title}</h1>
                <p className="card__description">{props.description}</p>
            </div>
            <button className="card__btn"><a className='card__link' href={props.link}>See more</a></button>
        </div>
    );
}