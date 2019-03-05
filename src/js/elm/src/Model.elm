module Model exposing (..)

import Dict exposing (Dict)


type alias Flags =
    { userType : String
    }


type alias FormFields =
    { fullName : String
    , email : String
    , userType : String
    , buttonText : String
    }


type alias ValidationErrors =
    Dict String (List String)


type SubscribeForm
    = Editing FormFields
    | Saving FormFields
    | Invalid FormFields ValidationErrors
    | Errored FormFields String
    | Success


type alias Model =
    { subscribeForm : SubscribeForm }


extractFormFields : SubscribeForm -> FormFields
extractFormFields subscribeForm =
    case subscribeForm of
        Editing ff ->
            ff

        Saving ff ->
            ff

        Invalid ff _ ->
            ff

        Errored ff _ ->
            ff

        Success ->
            emptyFormFields


emptyFormFields : FormFields
emptyFormFields =
    { fullName = ""
    , email = ""
    , userType = "Investor"
    , buttonText = "Subscribe"
    }


providerFormFields : FormFields
providerFormFields =
    { fullName = ""
    , email = ""
    , userType = "provider"
    , buttonText = "Apply"
    }


extractValidationErrors : SubscribeForm -> ValidationErrors
extractValidationErrors subscribeForm =
    case subscribeForm of
        Invalid _ validationErrors ->
            validationErrors

        _ ->
            emptyValidationErrors


emptyValidationErrors : ValidationErrors
emptyValidationErrors =
    Dict.empty


initialModel : Flags -> Model
initialModel flags =
    case flags.userType of
        "provider" ->
            { subscribeForm = Editing providerFormFields }

        _ ->
            { subscribeForm = Editing emptyFormFields }
