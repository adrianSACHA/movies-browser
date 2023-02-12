import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../../../common/states/Loading";
import { ErrorBox } from "../../../common/states/ErrorBox";
import PersonPageDetails from "./Person";
import {
    fetchPersonDetails,
    selectPersonStatus,
    setPersonId,
} from "./personDetailsSlice";

const PersonPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const status = useSelector(selectPersonStatus);

    useEffect(() => {
        dispatch(fetchPersonDetails());
        dispatch(setPersonId(id));
    }, [id, dispatch]);

    return {
        loading: <Loading />,
        success: <PersonPageDetails />,
        error: <ErrorBox />,
    }[status];
};

export default PersonPage;