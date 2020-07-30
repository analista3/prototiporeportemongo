import { createGlobalStyle } from 'styled-components'

export const ButtonsGlobalStyles = createGlobalStyle`
  .button {
    border-radius: 25px !important;
    font-family: 'Raleway', Arial !important;
    font-weight: bold !important;
    padding: .8em 2.3em !important;

    &.primary {
      background: #DD9835 !important;
      border: 2px #DD9835 solid !important;
      
      &.outline {
        background: transparent !important;
        border: 2px #DD9835 solid !important;
        color: #DD9835;

        &:hover {
          color: #DD9835;
          background: rgba(221, 152, 53, 0.1) !important;
        }

        &:focus {
          color: #DD9835;
        }
      }
    }

    &.secondary {
      background: #767676 !important;
      font-family: 'Roboto', arial !important;
      font-size: 1.1em !important;

      &.outline {
        background: transparent !important;
        border: 2px #767676 solid;
        color: #767676 !important;
      }
    }
    
    &.uppercase {
      text-transform: uppercase !important;
    }
  }
`
