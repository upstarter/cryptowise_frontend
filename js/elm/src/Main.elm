-- https://github.com/NoRedInk/elm-style-guide/blob/master/README.md


port module Main exposing (main)

import Html exposing (Html)
import Messages exposing (Msg(..))
import Model exposing (..)
import Update exposing (update)
import View exposing (view)


main : Program Flags Model Msg
main =
    Html.programWithFlags
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }


init : Flags -> ( Model, Cmd Msg )
init flags =
    initialModel flags ! []


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none
