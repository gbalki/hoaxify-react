import React from "react";
import ProfileImageWithDefault from "./ProfileImageWithDefault";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import { useTranslation } from "react-i18next";

const HoaxView = (props) => {
  const { hoax } = props;
  const { user, content, timestamp } = hoax;
  const { username, displayName, image } = user;

  const { i18n } = useTranslation();
  const formatted = format(timestamp, i18n.language);
  return (
    <div className="card p-1">
      <div className="d-flex">
        <ProfileImageWithDefault
          image={image}
          height="32"
          width="32"
          className="rounded-circle m-1"
        />
        <div className="flex-fill m-auto ps-2">
          <Link to={`/user/${username}`} className="text-dark">
            <h6 className="d-inline">
              {displayName}@{username}
            </h6>
          </Link>
          <span> - </span>
          <span>{formatted}</span>
        </div>
      </div>
      <div className="ps-5">{content}</div>
    </div>
  );
};

export default HoaxView;
