import WalletDetail from '@/components/wallet/wallet-detail';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, Wallet } from '@/types';
import { Head } from '@inertiajs/react';

export default function WalletShowPage({ wallet }: { wallet: Wallet }) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Wallet',
            href: '/wallet',
        },
        {
            title: `${wallet.id}`,
            href: `/wallet/${wallet.id}`,
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Wallet" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <WalletDetail wallet={wallet} />
            </div>
        </AppLayout>
    );
}
