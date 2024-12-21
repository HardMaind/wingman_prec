import { SidebarProvider } from '@/components/ui/sidebar';
import { AppHeader } from '@/components/app-header';
import { AppSidebar } from '@/components/app-sidebar';
import '@/styles/global.css';
import '@/styles/scss/custom-theme.scss';

export default function Layout({ children }) {
  return (
    <html>
      <head>
        <title>Wingman store</title>
        <link rel="icon" src="/favicon.png" />
      </head>
      <body>
        <SidebarProvider defaultOpen={false}>
          <AppSidebar />
          <main className="flex flex-col transition-[width,height] ease-linear w-full">
            <AppHeader />
            <div className="flex flex-1 flex-col mx-6 md:mx-[40px] my-6 md:my-[36px] border border-black-100 p-6 rounded-[20px]">
              {children}
            </div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
