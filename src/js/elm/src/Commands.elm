module Commands exposing (subscribe)

import Dict exposing (Dict)
import Http
import Json.Decode as JD
import Json.Encode as JE
import Decoders exposing (responseDecoder)
import Messages exposing (Msg(..))
import Model exposing (SubscribeForm(..), FormFields)
import Debug


subscribe : SubscribeForm -> Cmd Msg
subscribe subscribeForm =
    case subscribeForm of
        Editing formFields ->
            Http.send SubscribeResponse (post formFields)

        _ ->
            Cmd.none


post : FormFields -> Http.Request Bool
post formFields =
    Http.request
        { method = "POST"
        , headers = []
        , url = "/api/v1/leads"
        , body = Http.jsonBody (encodeModel formFields)
        , expect = Http.expectJson responseDecoder
        , timeout = Nothing
        , withCredentials = False
        }


encodeModel : FormFields -> JD.Value
encodeModel { fullName, email, userType } =
    JE.object
        [ ( "lead"
          , JE.object
                [ ( "email", JE.string email )
                , ( "userType", JE.string userType )
                ]
          )
        ]
