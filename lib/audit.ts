import { prisma } from './prisma';

export async function createAuditLog(
  userId: string,
  action: string,
  entityType: string,
  entityId: string,
  changes?: Record<string, any>,
  ipAddress?: string,
  userAgent?: string
) {
  try {
    await prisma.auditLog.create({
      data: {
        userId,
        action,
        entityType,
        entityId,
        changes: JSON.stringify(changes || {}),
        ipAddress,
        userAgent,
      },
    });
  } catch (error) {
    console.error('Failed to create audit log:', error);
  }
}
