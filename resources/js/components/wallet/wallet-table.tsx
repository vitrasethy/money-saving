import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Wallet } from '@/types';
import { Link } from '@inertiajs/react';
import { Eye } from 'lucide-react';
import { Button } from '../ui/button';
import WalletDeleteDialog from './wallet-delete-dialog';

export default function WalletTable({ wallets }: { wallets: Wallet[] }) {
    if (wallets.length === 0) {
        return <h3 className="text-center text-2xl font-semibold">No Wallets</h3>;
    }

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Wallet Name</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead className="text-center">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {wallets.map((wallet: Wallet) => (
                    <TableRow key={wallet.id}>
                        <TableCell className="font-medium">{wallet.id}</TableCell>
                        <TableCell>{wallet.name}</TableCell>
                        <TableCell>{wallet.amount}</TableCell>
                        <TableCell className="text-center">
                            <div className="flex flex-wrap justify-center gap-2">
                                <WalletDeleteDialog walletId={wallet.id} />
                                <Button asChild size={'icon'} className="bg-blue-500 text-white" variant={'outline'}>
                                    <Link href={`/wallet/${wallet.id}`}>
                                        <Eye />
                                    </Link>
                                </Button>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
