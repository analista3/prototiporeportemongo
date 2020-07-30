import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  .light {
    background: #2E2E2E !important;
  }

  .color-ppal {
    background: #DD9835 !important;
  }

  p.text-muted {
    color: #AFAFAF;
    font-family: 'Roboto', Arial;
    margin-bottom: 5px;
  }

  .flex-container {
    display: flex !important;

    &.center {
      align-items: center;
    }
  }

  .active-module {
    & > h5 {
      display: flex;
      align-items: center;
      color: #DD9835 !important;

      &::before {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 5px;
        background: #DD9835;
        position: absolute;
        left: 15px;
      }
    }
  }

  .active-item {
    & > p {
      display: flex;
      align-items: center;
      color: #DD9835 !important;

      &::before {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 5px;
        background: #DD9835;
        position: absolute;
        left: 15px;
      }
    }
  }

  .dark {
    background: #212121 !important;
  }

  .robotoFont {
    font-family: 'Roboto', Arial !important;
  }

  .no-padding {
    padding: 0 !important;
  }

  .accordion-sidebar {
    margin-bottom: 2px;
  }

  .item-sidebar {
    padding: 1.2em 1.33333333em !important;
    padding-left: 40px !important;
    margin-bottom: 2px;

    &.title {
      margin-bottom: 0;
    }
  }

  .sidebar-arrow {
    font-size: 14px !important;
  }

  .title-sidebar-item {
    display: flex;
    justify-content: space-between;
  }

  .user-type-selector {
    display: flex !important;
    align-items: center;
  }

  .forgot-pass {
    font-family: 'Roboto', Arial;
    text-align: right;
    margin-top: -10px;
    margin-bottom: 10px;

    & > a {
      color: #AFAFAF;
    }
  }

  .logo-login {
    width: 230px;
    position: absolute;
    margin-bottom: -15px;
    margin-left: -10px;
  }

  .header-login {
    text-transform: uppercase !important;
    font-family: 'Raleway', sans-serif !important;
    font-weight: bold;
  }
i.icon{margin-right:0}
  .profile-img-preview {
    align-items: baseline !important;
    & img {
      margin-right: 20px;
      box-shadow: 0 3px 6px rgba(0,0,0,.16);
    }
    & > span {
      &:nth-child(1) > img {
        width: 150px;
        height: 150px;
      }
      &:nth-child(2) > img {
        width: 90px;
        height: 90px;
      }
      &:nth-child(3) > img {
        width: 50px;
        height: 50px;
      }
    }
  }

  .information {
    height: 50vh !important;
    overflow-y: scroll;
  }

  .breadcrumb {
    font-family: 'Roboto', arial !important;
    color: '#767676' !important;
    font-size: 18px !important;
  }
  .ui.grid>.row>.stretched.column>*, .ui.grid>.stretched.column:not(.row)>*, .ui.grid>.stretched.row>.column>*, .ui.stretched.grid>.column>*, .ui.stretched.grid>.row>.column>* {    flex-grow: 0;
}

  & .results {
    justify-content: space-between;
    display: flex;
    align-items: center;
    & .detailsresults {
      display: flex;
      align-items: center;
      & h1 {
        color: #dd9835;
        margin-right: 30px;
      }
    }
  }
  .popupError {
    box-shadow: 0 0 0 1px #e0b4b4 inset, 0 0 0 0 transparent !important;
    background: #fff6f6 !important;
    border: 0 !important;
    color: #9f3a38 !important;
    
    & i.inverted.bordered.icon, i.inverted.circular.icon {
      background: #9f3a38 !important;
    }

    &:before {
      background: #fff6f6 !important;
      border: 0 !important;
      box-shadow: none !important;
      border-bottom: 1px #e0b4b4 solid !important;
      border-right: 1px #e0b4b4 solid !important;
    }
  }

  .Roles__descriptions {
    color: #AFAFAF;
    font-family: 'Roboto', Arial;
    user-select: none;
  }

  .page {
    padding: 5%;
  }

  .padding-top-none {
    padding-top: 0;
  }
  .ui.modal {
    & .content {
      padding: 0;
    } & iframe{    border: transparent;
}
  }
`

export const FormsGlobalStyles = createGlobalStyle`
  .field {
    & > label {
      margin-left: 15px !important;
      font-family: 'Roboto', arial !important;
      font-size: 1.1em !important;
      color: #AFAFAF !important;

      &.icon {
        margin-left: 0px !important;
        cursor: pointer;
      }
      
      &.disabled {
        color: #AFAFAF !important;
      }

      &:after {
        color: #DD9835 !important;
      }

    }


    &.error > .action > .password-view {
      border: 1px rgb(224, 180, 180) solid !important;
      border-left: none !important; 
      color: rgb(224, 180, 180) !important;
      background-color: rgb(255, 246, 246) !important;
    }

    &.error > label {
      color: #9f3a38 !important;
    }

    & > input {
      border-radius: 25px !important;
      font-family: 'Roboto', arial !important;

      &:focus {
        border: 1px solid #DD9835 !important;
        outline: none !important;
      }
    }
    
    &:focus-within .password-view {
      border: 1px #DD9835 solid !important;
      border-left: none !important; 
    }
    & > .checkbox {
      & label {
        font-family: 'Roboto', sans-serif !important;
        color: #707070 !important;
      }
    }

    .description-checkbox {
      margin-top: 10px;
      margin-left: 25px !important;
      font-family: 'Roboto', sans-serif;
      color: #AFAFAF;
    }
  }

  .input {
    & > input {
      border-radius: 25px !important;
      font-family: 'Roboto', Arial !important;

      &:focus {
        border: 1px solid #DD9835 !important;
      }
    }

    &.icon > i.icon > img {
      width: 22px;
      height: 22px;
      margin-top: 7px;
    }

    &.action > .button {
      border-bottom-left-radius: 0 !important;
      border-top-left-radius: 0 !important;

      &.password-view {
        padding-left: 15px !important;
        padding-right: 20px !important;
        background: transparent;
        border: 1px #dddddd solid;
        border-left: none;

        & > .icon {
          margin: 0 !important;
        }
      }
    }
  }

  .selection.dropdown {
    border-radius: 25px !important;
  }

  .selection.active.dropdown {
    border-color: #DD9835 !important;

    & .menu {
      border-color: #DD9835 !important;
    }
  }

  i.icon > img {
    width: 22px;
    height: 22px;
    margin-top: -6px;
  } 

  .checkbox {
    font-family: 'Roboto', Arial !important;
  }

  .datatable-badge {
    padding: 0 !important;
  }

`
