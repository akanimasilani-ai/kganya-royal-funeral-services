export class ApiError extends Error {
  constructor(
    public statusCode: number,
    message: string,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export function errorResponse(statusCode: number, message: string) {
  return new Response(
    JSON.stringify({ error: message }),
    {
      status: statusCode,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}

export function successResponse(data: any, statusCode = 200) {
  return new Response(
    JSON.stringify(data),
    {
      status: statusCode,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
