import { SidebarProvider } from '@/components/ui/sidebar';
import { AppHeader } from '@/components/app-header';
import { AppSidebar } from '@/components/app-sidebar';
import '@/styles/global.css';
import '@/styles/scss/custom-theme.scss';

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <SidebarProvider defaultOpen={false}>
          <AppSidebar />
          <main className="flex flex-col gap-2 transition-[width,height] ease-linear w-full">
            <AppHeader />
            <div className="flex flex-1 flex-col mx-[40px] my-[36px] border border-black-100 p-6 rounded-[20px]">
              {children}
            </div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
