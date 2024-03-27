import MainLayout from "../layout/MainLayout";
import Components from "../pages/Components";
import Docs from "../pages/Docs";
import Templates from "../pages/Templates";
import Calendars from "../pages/applications/dataDisplay/Calendars";
import DescriptionList from "../pages/applications/dataDisplay/DescriptionList";
import ApplicationStats from "../pages/applications/dataDisplay/Stats";
import Avatars from "../pages/applications/elements/Avatars";
import Badges from "../pages/applications/elements/Badges";
import ButtonGroups from "../pages/applications/elements/ButtonGroups/index.";
import Buttons from "../pages/applications/elements/Buttons";
import DrodpDown from "../pages/applications/elements/DropDowns";
import Alert from "../pages/applications/feedbacks/Alert";
import EmptyStates from "../pages/applications/feedbacks/EmptyStates";
import ActionPanels from "../pages/applications/forms/ActionPanels";
import CheckBoxes from "../pages/applications/forms/CheckBoxes";
import ComboBoxes from "../pages/applications/forms/ComboBoxes";
import FormLayouts from "../pages/applications/forms/FormLayouts";
import InputGroups from "../pages/applications/forms/InputGroups";
import RadioGroups from "../pages/applications/forms/RadioGroups";
import SelectMenus from "../pages/applications/forms/SelectMenus";
import SigninAndRegistration from "../pages/applications/forms/SigninAndRegistration";
import TextArea from "../pages/applications/forms/TextArea";
import Toogles from "../pages/applications/forms/Toogles";
import CardHeadings from "../pages/applications/heading/CardHeadings";
import PageHeadings from "../pages/applications/heading/PageHeadings";
import ApplicationSectionHeading from "../pages/applications/heading/SectionHeadings";
import Containers from "../pages/applications/layout/Containers";
import Dividers from "../pages/applications/layout/Dividers";
import ListContainers from "../pages/applications/layout/ListContainers";
import MediaObjects from "../pages/applications/layout/MediaObjects";
import Panels from "../pages/applications/layout/Panels";
import Feeds from "../pages/applications/lists/Feeds";
import GridLists from "../pages/applications/lists/GridLists";
import StackedLists from "../pages/applications/lists/StackedLists";
import Tables from "../pages/applications/lists/Tables";
import BreadCrumbs from "../pages/applications/navigation/BreadCrumbs";
import CommadPalettes from "../pages/applications/navigation/CommandPalettes";
import Navbar from "../pages/applications/navigation/Navbar";
import Pagination from "../pages/applications/navigation/Pagination";
import SidebarNavigation from "../pages/applications/navigation/SidebarNavigation";
import Steps from "../pages/applications/navigation/Steps";
import Tabs from "../pages/applications/navigation/Tabs";
import VerticalNevigation from "../pages/applications/navigation/VerticalNavigation";
import Dialogs from "../pages/applications/overlays/Dialogs";
import Notifications from "../pages/applications/overlays/Notifications";
import SideOvers from "../pages/applications/overlays/SideOvers";
import DetailScreens from "../pages/applications/pages/DetailScreens";
import HomeScreen from "../pages/applications/pages/HomeScreen";
import SettingsScreen from "../pages/applications/pages/SettingsScreens";
import MultiColumnLayout from "../pages/applications/shells/MultiColumnLayout";
import SidebarLayouts from "../pages/applications/shells/SidebarLayouts";
import StackedLayouts from "../pages/applications/shells/StackedLayouts";
import CategoryFilters from "../pages/ecommerce/components/CategoryFilters";
import CategoryPreviews from "../pages/ecommerce/components/CategoryPreviews";
import CheckoutForms from "../pages/ecommerce/components/CheckoutForms";
import Incentives from "../pages/ecommerce/components/Incentives";
import OrderHistory from "../pages/ecommerce/components/OrderHistory";
import OrderSummaries from "../pages/ecommerce/components/OrderSummaries";
import ProductFeatures from "../pages/ecommerce/components/ProductFeatures";
import { ProductLists } from "../pages/ecommerce/components/ProductLists";
import ProductOverviews from "../pages/ecommerce/components/ProductOverviews";
import ProductsQuickviews from "../pages/ecommerce/components/ProductsQuickviews";
import PromoSection from "../pages/ecommerce/components/PromoSection";
import Reviews from "../pages/ecommerce/components/Reviews";
import ShoppingCarts from "../pages/ecommerce/components/ShoppingCarts";
import StoreNavigation from "../pages/ecommerce/components/StoreNavigation";
import CategoryPages from "../pages/ecommerce/pages/CategoryPages";
import CheckoutPages from "../pages/ecommerce/pages/CheckoutPages";
import OrderDetailPages from "../pages/ecommerce/pages/OrderDetailPages";
import OrderHistoryPages from "../pages/ecommerce/pages/OrderHistoryPages";
import ProductPages from "../pages/ecommerce/pages/ProductPages";
import ShoppingCartPages from "../pages/ecommerce/pages/ShoppingCartPages";
import StorefrontPage from "../pages/ecommerce/pages/StorefrontPage";
import Banners from "../pages/marketing/elements/Banners";
import FlyoutMenu from "../pages/marketing/elements/FlyoutMenu";
import Headers from "../pages/marketing/elements/Headers";
import NotFound from "../pages/marketing/feedback/NotFound";
import Blog from "../pages/marketing/pageSection/Blog";
import Contact from "../pages/marketing/pageSection/Contact";
import Cta from "../pages/marketing/pageSection/Cta";
import Faq from "../pages/marketing/pageSection/Faq";
import Feature from "../pages/marketing/pageSection/Feature";
import Footers from "../pages/marketing/pageSection/Foooters";
import Header from "../pages/marketing/pageSection/Header";
import Hero from "../pages/marketing/pageSection/Hero";
import LogoCloude from "../pages/marketing/pageSection/LogoCloude";
import NewsLetter from "../pages/marketing/pageSection/NewsLetter";
import Price from "../pages/marketing/pageSection/Price";
import Stats from "../pages/marketing/pageSection/Stats";
import Team from "../pages/marketing/pageSection/Team";
import Testimonial from "../pages/marketing/pageSection/Testimonial";
import AboutPage from "../pages/marketing/pages/AboutPage";
import LandingPage from "../pages/marketing/pages/LandingPage";
import PricePage from "../pages/marketing/pages/PricePage";

import {
  applicationRoutes,
  ecommerceRoutes,
  marketingRoutes,
} from "../shared/constants/routes.constants";

export const RoutesConfig = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/components", element: <Components /> },
      { path: "/templates", element: <Templates /> },
      { path: "/documentation", element: <Docs /> },
      // page section
      // components
      {
        path: marketingRoutes.hero,
        element: <Hero />,
      },
      {
        path: marketingRoutes.feature,
        element: <Feature />,
      },
      {
        path: marketingRoutes.cta,
        element: <Cta />,
      },
      {
        path: marketingRoutes.price,
        element: <Price />,
      },
      {
        path: marketingRoutes.header,
        element: <Header />,
      },
      {
        path: marketingRoutes.newsletter,
        element: <NewsLetter />,
      },
      {
        path: marketingRoutes.stats,
        element: <Stats />,
      },
      {
        path: marketingRoutes.testimonial,
        element: <Testimonial />,
      },
      {
        path: marketingRoutes.blog,
        element: <Blog />,
      },
      {
        path: marketingRoutes.contact,
        element: <Contact />,
      },
      {
        path: marketingRoutes.team,
        element: <Team />,
      },
      {
        path: marketingRoutes.content,
        element: <Contact />,
      },
      {
        path: marketingRoutes.logoCloude,
        element: <LogoCloude />,
      },
      {
        path: marketingRoutes.faqs,
        element: <Faq />,
      },
      {
        path: marketingRoutes.footers,
        element: <Footers />,
      },
      // elements
      {
        path: marketingRoutes.headers,
        element: <Headers />,
      },
      {
        path: marketingRoutes.flyoutMenu,
        element: <FlyoutMenu />,
      },
      {
        path: marketingRoutes.banners,
        element: <Banners />,
      },
      // feedback
      {
        path: marketingRoutes.notFound,
        element: <NotFound />,
      },
      // page example
      {
        path: marketingRoutes.landingPage,
        element: <LandingPage />,
      },
      {
        path: marketingRoutes.pricePage,
        element: <PricePage />,
      },
      {
        path: marketingRoutes.aboutPage,
        element: <AboutPage />,
      },

      // Application
      // shells
      {
        path: applicationRoutes.stackedLayouts,
        element: <StackedLayouts />,
      },
      {
        path: applicationRoutes.sidebarLayouts,
        element: <SidebarLayouts />,
      },
      {
        path: applicationRoutes.multiColumnLayout,
        element: <MultiColumnLayout />,
      },
      // heading
      {
        path: applicationRoutes.pageHeadings,
        element: <PageHeadings />,
      },
      {
        path: applicationRoutes.cardHeadings,
        element: <CardHeadings />,
      },
      {
        path: applicationRoutes.sectionHeadings,
        element: <ApplicationSectionHeading />,
      },

      // data display section
      {
        path: applicationRoutes.descriptionList,
        element: <DescriptionList />,
      },
      {
        path: applicationRoutes.stats,
        element: <ApplicationStats />,
      },
      {
        path: applicationRoutes.calendars,
        element: <Calendars />,
      },

      // lists section
      {
        path: applicationRoutes.stackedLists,
        element: <StackedLists />,
      },
      {
        path: applicationRoutes.tables,
        element: <Tables />,
      },
      {
        path: applicationRoutes.gridLists,
        element: <GridLists />,
      },
      {
        path: applicationRoutes.feeds,
        element: <Feeds />,
      },
      // froms section
      {
        path: applicationRoutes.formLayouts,
        element: <FormLayouts />,
      },
      {
        path: applicationRoutes.inputGroups,
        element: <InputGroups />,
      },
      {
        path: applicationRoutes.selectMenus,
        element: <SelectMenus />,
      },
      {
        path: applicationRoutes.signInAndRegistration,
        element: <SigninAndRegistration />,
      },
      {
        path: applicationRoutes.textAreas,
        element: <TextArea />,
      },
      {
        path: applicationRoutes.radioGroups,
        element: <RadioGroups />,
      },
      {
        path: applicationRoutes.checkBoxes,
        element: <CheckBoxes />,
      },
      {
        path: applicationRoutes.toggles,
        element: <Toogles />,
      },
      {
        path: applicationRoutes.actionPanels,
        element: <ActionPanels />,
      },
      {
        path: applicationRoutes.comboBoxes,
        element: <ComboBoxes />,
      },
      // feedbacks section
      {
        path: applicationRoutes.alerts,
        element: <Alert />,
      },
      {
        path: applicationRoutes.emptyStates,
        element: <EmptyStates />,
      },
      // navigation section
      {
        path: applicationRoutes.navbar,
        element: <Navbar />,
      },
      {
        path: applicationRoutes.pagination,
        element: <Pagination />,
      },
      {
        path: applicationRoutes.tabs,
        element: <Tabs />,
      },
      {
        path: applicationRoutes.siebarNavigation,
        element: <SidebarNavigation />,
      },
      {
        path: applicationRoutes.breadcrumbs,
        element: <BreadCrumbs />,
      },
      {
        path: applicationRoutes.steps,
        element: <Steps />,
      },
      {
        path: applicationRoutes.commandPalettes,
        element: <CommadPalettes />,
      },
      {
        path: applicationRoutes.verticalNavigation,
        element: <VerticalNevigation />,
      },
      // overlays section
      {
        path: applicationRoutes.dialogs,
        element: <Dialogs />,
      },
      {
        path: applicationRoutes.sideOvers,
        element: <SideOvers />,
      },
      {
        path: applicationRoutes.notifications,
        element: <Notifications />,
      },
      // elements section
      {
        path: applicationRoutes.avatars,
        element: <Avatars />,
      },
      {
        path: applicationRoutes.badges,
        element: <Badges />,
      },
      {
        path: applicationRoutes.dropdowns,
        element: <DrodpDown />,
      },
      {
        path: applicationRoutes.buttons,
        element: <Buttons />,
      },
      {
        path: applicationRoutes.buttonGroups,
        element: <ButtonGroups />,
      },
      // layuout section
      {
        path: applicationRoutes.containers,
        element: <Containers />,
      },
      {
        path: applicationRoutes.panels,
        element: <Panels />,
      },
      {
        path: applicationRoutes.listContainers,
        element: <ListContainers />,
      },
      {
        path: applicationRoutes.mediaObjects,
        element: <MediaObjects />,
      },
      {
        path: applicationRoutes.dividers,
        element: <Dividers />,
      },
      // page examples section
      {
        path: applicationRoutes.homeScreens,
        element: <HomeScreen />,
      },
      {
        path: applicationRoutes.detailScreens,
        element: <DetailScreens />,
      },
      {
        path: applicationRoutes.settingsScreens,
        element: <SettingsScreen />,
      },

      // ecommerce
      // components
      {
        path: ecommerceRoutes.productOverviews,
        element: <ProductOverviews />,
      },
      {
        path: ecommerceRoutes.productLists,
        element: <ProductLists />,
      },
      {
        path: ecommerceRoutes.categoryPreviews,
        element: <CategoryPreviews />,
      },
      {
        path: ecommerceRoutes.shoppingCarts,
        element: <ShoppingCarts />,
      },
      {
        path: ecommerceRoutes.categoryFilters,
        element: <CategoryFilters />,
      },
      {
        path: ecommerceRoutes.productsQuickviews,
        element: <ProductsQuickviews />,
      },
      {
        path: ecommerceRoutes.productFeatures,
        element: <ProductFeatures />,
      },
      {
        path: ecommerceRoutes.storeNavigation,
        element: <StoreNavigation />,
      },
      {
        path: ecommerceRoutes.promoSections,
        element: <PromoSection />,
      },
      {
        path: ecommerceRoutes.checkoutForms,
        element: <CheckoutForms />,
      },
      {
        path: ecommerceRoutes.reviews,
        element: <Reviews />,
      },
      {
        path: ecommerceRoutes.orderSummaries,
        element: <OrderSummaries />,
      },
      {
        path: ecommerceRoutes.orderHistory,
        element: <OrderHistory />,
      },
      {
        path: ecommerceRoutes.incentives,
        element: <Incentives />,
      },
      // page examples
      {
        path: ecommerceRoutes.storefrontPage,
        element: <StorefrontPage />,
      },
      {
        path: ecommerceRoutes.productPages,
        element: <ProductPages />,
      },
      {
        path: ecommerceRoutes.categoryPages,
        element: <CategoryPages />,
      },
      {
        path: ecommerceRoutes.shoppingCartPages,
        element: <ShoppingCartPages />,
      },
      {
        path: ecommerceRoutes.checkoutPages,
        element: <CheckoutPages />,
      },
      {
        path: ecommerceRoutes.orderDetailPages,
        element: <OrderDetailPages />,
      },
      {
        path: ecommerceRoutes.orderHistoryPages,
        element: <OrderHistoryPages />,
      },
    ],
  },
];
