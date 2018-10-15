import * as React from "react";
import { IntlProvider } from "react-intl";

import { getLocaleMessages } from "../intl";

export default class DynamicIntlProvider extends React.Component {
  render() {
    const { children, locale } = this.props;

    return (
      <IntlProvider
        key={locale}
        locale={locale}
        messages={getLocaleMessages(locale)}
      >
        {children}
      </IntlProvider>
    );
  }
}
