// "use client";

// import { PropsWithChildren, useMemo } from "react";
// import {
//   RawIntlProvider,
//   ReactIntlErrorCode,
//   IntlProvider,
//   createIntl,
//   createIntlCache,
// } from "react-intl";
// // import { useRouter } from "next/router";
// import { usePathname } from "next/navigation";

// import en from "../../locales/en.json";
// import de from "../../locales/de.json";
// import cs from "../../locales/cs.json";
// // import fr from "@/lib/locales/langs/fr.json";
// // import es from "@/lib/locales/langs/es.json";
// // import ru from "@/lib/locales/langs/ru.json";
// // import de from "@/lib/locales/langs/de.json";
// // import pt from "@/lib/locales/langs/pt.json";
// import { IS_CLIENT } from "@/constants/common";

// import { getDictionary } from "../../get-dictionary";

// const messages = [
//   {
//     en,
//     cs,
//     de,
//   },
// ];

// const cache = createIntlCache();

// // export const CustomIntlProvider = function (props: PropsWithChildren<unknown>) {
// export const CustomIntlProvider = function ({
//   children,
// }: PropsWithChildren<unknown>) {
//   // const locale = route.locale === "default" ? "en" : route.locale!;
//   const pathname = usePathname();
//   console.log("pathname in Provider", pathname);
//   const locale = pathname.split("/")[1];
//   // const intl = useMemo(() => {
//   //   const intl = createIntl(
//   //     {
//   //       locale,
//   //       messages: messages[locale as keyof typeof messages],
//   //       ...(process.env.NODE_ENV === "development"
//   //         ? {
//   //             onError: (err) => {
//   //               if (!IS_CLIENT) {
//   //                 return;
//   //               }
//   //               if (err.code === ReactIntlErrorCode.FORMAT_ERROR) {
//   //                 return console.warn(`format error for ${err.message}`);
//   //               }
//   //               if (err.code === ReactIntlErrorCode.MISSING_TRANSLATION) {
//   //                 return console.error(
//   //                   `missing translation for ${err.message}`
//   //                 );
//   //               }
//   //               console.warn(err);
//   //             },
//   //           }
//   //         : {
//   //             onError: () => {
//   //               // error handling in production
//   //             },
//   //           }),
//   //     },
//   //     cache
//   //   );
//   //   return intl;
//   // }, [locale]);
//   // return <RawIntlProvider value={intl}>{props.children}</RawIntlProvider>;
//   // const messages =  getDictionary(locale);
//   // return (
//   //   <IntlProvider locale={locale} messages={messages}>
//   //     {children}
//   //   </IntlProvider>
//   // );
// };
