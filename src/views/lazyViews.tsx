import { lazy } from "react";

export const ServicesView = lazy(() =>
  import("./ServicesView").then((m) => ({ default: m.ServicesView }))
);
export const IntelligenceView = lazy(() =>
  import("./IntelligenceView").then((m) => ({ default: m.IntelligenceView }))
);
export const RecoveryConfirmationView = lazy(() =>
  import("./RecoveryConfirmationView").then((m) => ({
    default: m.RecoveryConfirmationView,
  }))
);
export const ClientDashboardView = lazy(() =>
  import("./ClientDashboardView").then((m) => ({
    default: m.ClientDashboardView,
  }))
);
export const ChainTraceabilityView = lazy(() =>
  import("./ChainTraceabilityView").then((m) => ({
    default: m.ChainTraceabilityView,
  }))
);
export const ExchangeRecoveryView = lazy(() =>
  import("./ExchangeRecoveryView").then((m) => ({
    default: m.ExchangeRecoveryView,
  }))
);
export const LegalEnforcementView = lazy(() =>
  import("./LegalEnforcementView").then((m) => ({
    default: m.LegalEnforcementView,
  }))
);
export const RiskMonitoringView = lazy(() =>
  import("./RiskMonitoringView").then((m) => ({
    default: m.RiskMonitoringView,
  }))
);
export const ToolsView = lazy(() =>
  import("./ToolsView").then((m) => ({ default: m.ToolsView }))
);
export const ISO27001View = lazy(() =>
  import("./ISO27001View").then((m) => ({ default: m.ISO27001View }))
);
export const SOC2View = lazy(() =>
  import("./SOC2View").then((m) => ({ default: m.SOC2View }))
);
export const GDPRView = lazy(() =>
  import("./GDPRView").then((m) => ({ default: m.GDPRView }))
);
export const AMLKYCView = lazy(() =>
  import("./AMLKYCView").then((m) => ({ default: m.AMLKYCView }))
);
export const CaseLookupView = lazy(() =>
  import("./CaseLookupView").then((m) => ({ default: m.CaseLookupView }))
);
export const AboutView = lazy(() =>
  import("./AboutView").then((m) => ({ default: m.AboutView }))
);
export const BlogView = lazy(() =>
  import("./BlogView").then((m) => ({ default: m.BlogView }))
);
export const PrivacyPolicyView = lazy(() =>
  import("./PrivacyPolicyView").then((m) => ({ default: m.PrivacyPolicyView }))
);
export const TermsOfServiceView = lazy(() =>
  import("./TermsOfServiceView").then((m) => ({
    default: m.TermsOfServiceView,
  }))
);
export const ReviewsView = lazy(() =>
  import("./ReviewsView").then((m) => ({ default: m.ReviewsView }))
);
export const SubmitReviewView = lazy(() =>
  import("./SubmitReviewView").then((m) => ({ default: m.SubmitReviewView }))
);
export const AdminLoginView = lazy(() =>
  import("./AdminLoginView").then((m) => ({ default: m.AdminLoginView }))
);
export const FAQView = lazy(() =>
  import("./FAQView").then((m) => ({ default: m.FAQView }))
);
export const CaseManagerView = lazy(() => import("./AdminDashboardView"));

/** Warm the client portal workspace so Check Status / first visit open instantly. */
export function prefetchClientWorkspace(): void {
  void import("./ClientDashboardView");
  void import("./RecoveryConfirmationView");
}

/**
 * Warm only high-traffic page chunks after idle.
 * Avoid prefetching Blog/Tools/certs — those bundles are huge and starve first paint.
 */
export function prefetchPrimaryViews(): void {
  void import("./AboutView");
  void import("./ServicesView");
  void import("./FAQView");
  void import("./ReviewsView");
  void import("./CaseLookupView");
}

/** Prefetch a single route chunk on intent (hover / focus). */
export function prefetchViewChunk(
  view:
    | "about"
    | "services"
    | "faq"
    | "reviews"
    | "blog"
    | "tools"
    | "intelligence"
    | "submitReview"
    | "privacyPolicy"
    | "termsOfService"
    | "chainTraceability"
    | "exchangeRecovery"
    | "legalEnforcement"
    | "riskMonitoring"
    | "iso27001"
    | "soc2"
    | "gdpr"
    | "amlkyc"
    | "clientDashboard"
    | "recoveryConfirmation"
    | "caseLookup"
): void {
  switch (view) {
    case "about":
      void import("./AboutView");
      break;
    case "services":
      void import("./ServicesView");
      break;
    case "faq":
      void import("./FAQView");
      break;
    case "reviews":
      void import("./ReviewsView");
      break;
    case "blog":
      void import("./BlogView");
      break;
    case "tools":
      void import("./ToolsView");
      break;
    case "intelligence":
      void import("./IntelligenceView");
      break;
    case "submitReview":
      void import("./SubmitReviewView");
      break;
    case "privacyPolicy":
      void import("./PrivacyPolicyView");
      break;
    case "termsOfService":
      void import("./TermsOfServiceView");
      break;
    case "chainTraceability":
      void import("./ChainTraceabilityView");
      break;
    case "exchangeRecovery":
      void import("./ExchangeRecoveryView");
      break;
    case "legalEnforcement":
      void import("./LegalEnforcementView");
      break;
    case "riskMonitoring":
      void import("./RiskMonitoringView");
      break;
    case "iso27001":
      void import("./ISO27001View");
      break;
    case "soc2":
      void import("./SOC2View");
      break;
    case "gdpr":
      void import("./GDPRView");
      break;
    case "amlkyc":
      void import("./AMLKYCView");
      break;
    case "clientDashboard":
      void import("./ClientDashboardView");
      break;
    case "recoveryConfirmation":
      void import("./RecoveryConfirmationView");
      break;
    case "caseLookup":
      void import("./CaseLookupView");
      break;
  }
}
