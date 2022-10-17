import React from "react";
import * as S from "./style";

export default function index() {
    return (
        <>
        <S.ErrorContainer>
            <S.ErrorMensage>ERROR [404] </S.ErrorMensage>
            <S.ErrorMensage>PAGE NOT FOUND</S.ErrorMensage>
            <S.ErrorMensage>Please, go to a valid page</S.ErrorMensage>
        </S.ErrorContainer>
        </>
    );
}
