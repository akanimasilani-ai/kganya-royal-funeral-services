import { getServerSession } from 'next-auth';
import { authOptions } from './auth';
import { ApiError } from './errors';

export async function requireAuth() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user) {
    throw new ApiError(401, 'Unauthorized');
  }
  
  return session;
}

export async function requireAdminAuth() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user) {
    throw new ApiError(401, 'Unauthorized');
  }
  
  if ((session.user as any).role !== 'ADMIN' && (session.user as any).role !== 'SUPER_ADMIN') {
    throw new ApiError(403, 'Forbidden: Admin access required');
  }
  
  return session;
}
