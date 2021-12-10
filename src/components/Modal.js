import React from "react";
import ItemGroup from "./List/ItemGroup";
import ListGroup from "./List/ListGroup";
import ContainerModal from "./Modal/ContainerModal";
import FooterModal from "./Modal/FooterModal";
import HeaderModal from "./Modal/HeaderModal";
const avatar =
  "https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png";

const Modal = ({ image, onClose, isOpen, next, prev, changeImage }) => {
  const {
    largeImageURL,
    likes,
    downloads,
    tags,
    views,
    userImageURL,
    user,
    user_id,
  } = image;

  return (
    <ContainerModal isOpen={isOpen}>
      <HeaderModal onClose={onClose}>
        <img
          className="avatar_user"
          src={userImageURL === "" ? avatar : userImageURL}
          alt={user}
        />
        <div className="align-self-center mx-2">
          <span className="m-auto">{user}</span>
        </div>
      </HeaderModal>
      <div className="modal-body relative">
        <div className="text-center">
          <img
            className="rounded-sm shadow-sm image-modal w-10"
            src={largeImageURL}
            alt={tags}
          />
        </div>

        <div className="relative d-flex justify-content-between">
          <div className="align-self-center">
            <button
              onClick={() => changeImage(prev)}
              disabled={prev >= 0 ? false : true}
              className="btn btn-info"
              title="Ver anterior imagen"
            >
              &larr;
            </button>
          </div>
          <div className="list_group_container col-lg-8">
            <ListGroup>
              <ItemGroup title="Likes" value={likes} />
              <ItemGroup title="Descargas" value={downloads} />
              <ItemGroup title="Visualizaciones" value={views} />
              <ItemGroup title="Etiquetas">
                {tags?.split(",").map((tag) => (
                  <span key={tag} className="badge bg-info m-1  text-white">
                    {tag}
                  </span>
                ))}
              </ItemGroup>
            </ListGroup>
          </div>
          <div className="align-self-center">
            <button
              className="btn btn-info"
              onClick={() => changeImage(next)}
              title="Ver siguiente imagen"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
      <FooterModal>
        <div>
          <a
            href={`https://pixabay.com/es/users/${user}-${user_id}`}
            className="btn btn-info"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver perfil de usuario
          </a>
        </div>
      </FooterModal>
    </ContainerModal>
  );
};

export default Modal;
