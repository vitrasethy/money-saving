import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { router } from '@inertiajs/react';
import { Trash2 } from 'lucide-react';
import { Button } from '../ui/button';

export default function WalletDeleteDialog({ walletId }: { walletId: number }) {
    const handleDelete = () => {
        router.delete(`/wallet/${walletId}`);
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="bg-red-500 text-white" variant={'outline'} size={'icon'}>
                    <Trash2 />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>This action cannot be undone. This will permanently delete your wallet.</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete} className="border bg-red-500 text-white hover:bg-white hover:text-black">
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
