module View exposing (view)

import Dict exposing (Dict)
import Html exposing (Html, form)
import Html.Attributes as Html
import Html.Events as Html
import Messages exposing (Msg(..))
import Model exposing (..)


view : Model -> Html Msg
view { subscribeForm } =
    case subscribeForm of
        Success ->
            Html.div
                [ Html.class "success-message" ]
                [ Html.div
                    [ Html.class "icon is-medium" ]
                    [ Html.i
                        [ Html.class "fa fa-2x fa-heart" ]
                        []
                    ]
                , Html.h2
                    []
                    [ Html.text "Be Wise and Prosper!" ]
                , Html.p
                    []
                    [ Html.text "We'll let you know when we launch." ]
                ]

        _ ->
            formView subscribeForm


formView : SubscribeForm -> Html Msg
formView subscribeForm =
    let
        validationErrors =
            extractValidationErrors subscribeForm

        { fullName, email, userType, buttonText } =
            extractFormFields subscribeForm

        saving =
            case subscribeForm of
                Saving _ ->
                    True

                _ ->
                    False

        invalid =
            case subscribeForm of
                Invalid _ _ ->
                    True

                _ ->
                    False

        buttonDisabled =
            email == "" || saving || invalid
    in
        Html.div
            [ Html.class "container" ]
            [ formError subscribeForm
            , form
                [ Html.onSubmit HandleFormSubmit ]
                [ Html.div
                    [ Html.class "field" ]
                    [ Html.div
                        [ Html.class "field-body" ]
                        [ Html.div
                            [ Html.class "control" ]
                            [ Html.input
                                [ Html.classList
                                    [ ( "input", True )
                                    , ( "is-danger", Dict.member "email" validationErrors )
                                    ]
                                , Html.type_ "email"
                                , Html.placeholder "Email Address"
                                , Html.required True
                                , Html.value email
                                , Html.onInput HandleEmailInput
                                ]
                                []
                            ]
                        ]
                    , Html.div
                        [ Html.class "field button-control" ]
                        [ Html.button
                            [ Html.class "button is-rounded is-primary is-large"
                            , Html.disabled buttonDisabled
                            ]
                            [ Html.span
                                [ Html.class "icon" ]
                                [ Html.i
                                    [ Html.classList
                                        [ ( "fa fa-check", not saving )
                                        , ( "fa fa-circle-o-notch fa-spin", saving )
                                        ]
                                    ]
                                    []
                                ]
                            , Html.span
                                []
                                [ Html.text buttonText ]
                            ]
                        ]
                    ]
                ]
            ]


formError : SubscribeForm -> Html Msg
formError subscribeForm =
    case subscribeForm of
        Errored _ message ->
            Html.div
                [ Html.class "notification is-danger fade-in" ]
                [ Html.text message ]

        _ ->
            Html.text ""


validationErrorView : String -> ValidationErrors -> Html Msg
validationErrorView key validationErrors =
    case Dict.get key validationErrors of
        Just error ->
            error
                |> List.map Html.text
                |> Html.p
                    [ Html.class "help is-danger" ]

        Nothing ->
            Html.text ""
