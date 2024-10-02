
import RightButtons from "@/components/logout-button";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";



export default function ProfileSection({ email }: { email: string }) {
    return (
        <div className="max-w-2xl mx-auto p-4">
            <div className="bg-white shadow-md rounded-lg p-6">
                <div className="flex justify-center items-center mb-4">
                    <span className="text-lg font-medium text-center">Account email: {email}</span>
                </div>
                <div className="border-t border-gray-200 mt-4 pt-4">
                    <RightButtons />
                </div>
            </div>
        </div>
    );
}
